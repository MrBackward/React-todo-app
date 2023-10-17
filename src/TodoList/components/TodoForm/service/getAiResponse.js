import axios from "axios";

export const getAiResponse = (input, setFieldValue, event) => {
  event.preventDefault();

  axios
    .post("http://localhost:3001/aiCreateDescription", {
      prompt: `Create a list of 5 subtasks of the provided task: '${input}', only return the 5 points and nothing else`,
    })
    .then((res) => {
        setFieldValue('description', res.data.text.content);
    })
    // setResponseState(result);
    .catch((err) => {
      console.error(err);
      return "An error occurred while processing your request.";
    });
};
