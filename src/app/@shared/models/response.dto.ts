import { MovieDto } from "@shared";

export interface ResponseDto {
  page: number;
  total_pages: number;
  results: MovieDto[];
  total_results: number;
}
