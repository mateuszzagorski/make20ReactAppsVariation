import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
    InstantSearch,
    SearchBox,
    Hits,
    Pagination,
    Stats,
} from "react-instantsearch-dom";
import "./real_time_search.scss";

// ===== OPTION 1: if you want to create your own algolia account and fill it with data =====
// demo data: https://www.algolia.com/doc/guides/building-search-ui/resources/demos/react/#media
// sample datasets on github: https://github.com/algolia/datasets

// ===== OPTION 2: if you want to get started quickly =====
// app id: SSN9CKZUJ2
// api key: ae8a3f7cff93d40282a4831930bfa38b
// index name: products

const searchClient = algoliasearch(
    "SSN9CKZUJ2",
    "ae8a3f7cff93d40282a4831930bfa38b"
);

export default function RealTimeSearch() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products">
            <div className="real_time_search-app">
                <div className="search-container">
                    <Stats />
                    <SearchBox />
                    <Hits hitComponent={Product} />
                    <Pagination
                        // Optional parameters
                        showFirst={true}
                        showPrevious={true}
                        showNext={true}
                        showLast={true}
                        padding={5}
                    />
                </div>
            </div>
        </InstantSearch>
    );
}

function Product({ hit }) {
    return (
        <a className="product" href={hit.url}>
            <img src={hit.image} alt={hit.name} />
            <div>
                <h3>{hit.brand}</h3>
                <h2>{hit.name}</h2>
                <p>${hit.price}</p>
            </div>
        </a>
    );
}
