import axios from "axios";

export const getAiResponse = (input, setFieldValue, event, setLoading) => {
  event.preventDefault();

  setLoading(true);

  axios
    .post("http://localhost:3001/aiCreateDescription", {
      prompt: `Create a list of 5 subtasks of the provided task: '${input}', only return the 5 points and nothing else`,
    })
    .then((res) => {
      setFieldValue("description", res.data.text.content);
      setLoading(false);
    })
    // setResponseState(result);
    .catch((err) => {
      console.error(err);
      setLoading(false);
      return "An error occurred while processing your request.";
    });
};
