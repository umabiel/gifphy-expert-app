import { getGifs } from "../../../helpers/getGifs";

describe("Pruebas en Hook useFetchGifs fetch()", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");
    expect(gifs.length).toEqual(10);
  });
});
