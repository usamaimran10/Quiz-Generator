import client from "./axios.config";
export const getQuiz = async (params) => {
  // console.log(params);
  return await client.get("/api.php", {
    params: { ...params },
  });
};
