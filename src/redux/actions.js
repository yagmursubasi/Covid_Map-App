import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";
import millify from "millify";

export const getDetails = createAsyncThunk(
  "/covid/getDetails",
  async (country) => {
    const formatedCountry = country.replace(" ", "-");
    //api` den verileri al
    const req = api.get("/statistics", {
      params: { country: formatedCountry },
    });
    const req2 = axios.get(`https://restcountries.com/v3.1/name/${country}`);

    //api isteklerini paralel şekilde gönder
    const responses = await Promise.all([req, req2]);

    console.log(responses);

    //veriyi formatla
    let data = responses[0].data.response[0];
    data = {
      continent: data?.continent,
      country: data.country,
      day: new Date(data.day).toLocaleDateString("tr"),
      cases: millify(data.cases.total),
      deaths: millify(data.deaths.total),
      recovered: millify(data.cases.recovered) || 0,
      population: millify(data.population),
      tests: millify(data.tests.total),
      flag: responses[1].data[0].flags,
    };

    // console.log(res.data);

    // aksiyonun payload'ını belirle
    return data;
  }
);

/**
{
continent:"Asia",
country:"Kazakhstan",
day:"2025-04-25",
cases:1411831,
deaths:13848,
recovered:1383020,
population:19205043
tests:11575012
  }
 */
