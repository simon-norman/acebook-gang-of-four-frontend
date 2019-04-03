const config = {
    development: { acebookApi: "http://localhost:4000" },
    production: { acebookApi: "https://acebook-gang-of-four.herokuapp.com" },
    test: { acebookApi: "http://localhost:4000" }
}

export default config[process.env.NODE_ENV]