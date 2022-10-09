import Swal from "sweetalert2";
import error from "../assets/images/error.gif";

export function errorSwal() {
  Swal.fire({
    title:
      "Token bị limit rồi, không vào được nữa đâu. Mai thì vào hoặc muốn vào thì chịu khó tìm ông Sỹ mà hỏi. Ai bảo spam cho lắm vào!",
    width: 600,
    padding: "3em",
    color: "#716add",
    backdrop: `
    rgba(0,0,123,0.4)
    url(${error})
    left top
    no-repeat
  `,
  });
}
