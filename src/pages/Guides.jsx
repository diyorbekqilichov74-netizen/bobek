import { useMemo, useState } from "react";
import GuideCard from "../components/GuideCard";
import { guides } from "../data/guides";

function Guides() {

  const [language, setLanguage] =
    useState("All");

  const [experience, setExperience] =
    useState("0");

  const [city, setCity] =
    useState("All");


  const languages = [
    ...new Set(
      guides.flatMap(
        (guide) => guide.languages
      )
    )
  ];


  const cities = [
    ...new Set(
      guides.map(
        (guide) => guide.city
      )
    )
  ];


  const filteredGuides = useMemo(() => {

    return guides.filter((guide) => {

      const languageMatch =
        language === "All" ||
        guide.languages.includes(language);

      const experienceMatch =
        guide.experience >=
        Number(experience);

      const cityMatch =
        city === "All" ||
        guide.city === city;

      return (
        languageMatch &&
        experienceMatch &&
        cityMatch
      );

    });

  }, [
    language,
    experience,
    city
  ]);


  return (
    <main className="page">

      {/* HEADER */}

      <div className="page-header">

        <span className="eyebrow">
          LOCAL EXPERTS
        </span>

        <h1>
          Meet Our
          <br />
          <em>Guides</em>
        </h1>

        <p>
          Discover Uzbekistan through the people
          who know it best.
        </p>

      </div>


      {/* FILTERS */}

      <div className="filters panel">

        <div className="filter-field">

          <label>
            Language
          </label>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
          >

            <option>
              All
            </option>

            {languages.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>


        <div className="filter-field">

          <label>
            Experience
          </label>

          <select
            value={experience}
            onChange={(e) =>
              setExperience(e.target.value)
            }
          >

            <option value="0">
              Any experience
            </option>

            <option value="5">
              5+ years
            </option>

            <option value="8">
              8+ years
            </option>

            <option value="10">
              10+ years
            </option>

          </select>

        </div>


        <div className="filter-field">

          <label>
            City
          </label>

          <select
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
          >

            <option>
              All
            </option>

            {cities.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>

      </div>


      {/* GUIDES */}

      <div className="results-bar">

        <strong>
          {filteredGuides.length}
        </strong>

        <span>
          guides available
        </span>

      </div>


      {filteredGuides.length > 0 ? (

        <div className="guide-grid">

          {filteredGuides.map(
            (guide) => (
              <GuideCard
                key={guide.id}
                guide={guide}
              />
            )
          )}

        </div>

      ) : (

        <div className="empty-state">

          <div className="empty-icon">
            ◎
          </div>

          <h2>
            No guides found
          </h2>

          <p>
            Try changing your filters.
          </p>

        </div>

      )}

    </main>
  );
}

export default Guides;