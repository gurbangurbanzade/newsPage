import { url } from "inspector";
import { ReadonlyURLSearchParams } from "next/navigation";
import { URLSearchParams } from "url";

export const getLatestNews = async () => {
  const response = await fetch("http://localhost:3000/latestNews");
  const data = await response.json();
  return data.slice(0, 5);
};
export const getLatestNewsAll = async () => {
  const response = await fetch("http://localhost:3000/latestNews");
  const data = await response.json();
  return data;
};

export const getLatestNewsById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/latestNews/${id}`);
  const data = await response.json();
  return data;
};

export const getAllCategory = async () => {
  const response = await fetch("http://localhost:3000/category");
  const data = await response.json();
  return data;
};
export const getAllColors = async () => {
  const response = await fetch("http://localhost:3000/colors");
  const data = await response.json();
  return data;
};
export const getAllSizes = async () => {
  const response = await fetch("http://localhost:3000/sizes");
  const data = await response.json();
  return data;
};
export const getAllProducts = async (searchParams: any) => {
  const params = new URLSearchParams();
  console.log(searchParams, "ssearchParams");

  if (searchParams.category) {
    params.set("category", searchParams.category);
  }

  if (searchParams.color) {
    params.set("color", searchParams.color);
  }

  if (searchParams.sizes) {
    params.set("size", searchParams.size);
  }

  const response = await fetch(
    `http://localhost:3000/products?${params.toString()}`
  );
  const data = await response.json();
  return data;
};
