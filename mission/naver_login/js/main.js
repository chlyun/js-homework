const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const form = document.querySelector(".login-form");
const emailInput = document.getElementById("userEmail");
const emailError = document.getElementById("userEmailError");
const pwdInput = document.getElementById("userPassword");
const pwdError = document.getElementById("userPasswordError");

emailInput.addEventListener("input", function () {
  const userEmail = emailInput.value;
  isEmailValid = emailReg(userEmail);
  if (isEmailValid) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }
});

// 비밀번호 입력 체크 및 상태 관리
pwdInput.addEventListener("input", function () {
  const userPassword = pwdInput.value;
  isPasswordValid = pwReg(userPassword);
  if (isPasswordValid) {
    pwdInput.classList.remove("is--invalid");
  } else {
    pwdInput.classList.add("is--invalid");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userEmail = emailInput.value;
  const userPassword = pwdInput.value;

  // 이메일 유효 검사
  isEmailValid = emailReg(userEmail);
  if (isEmailValid) {
    emailInput.classList.remove("is--invalid");
  } else {
    emailInput.classList.add("is--invalid");
  }

  // 비밀번호 유효 검사
  isPasswordValid = pwReg(userPassword);
  if (isPasswordValid) {
    pwdInput.classList.remove("is--invalid");
  } else {
    pwdInput.classList.add("is--invalid");
  }

  //비교
  if (isEmailValid && isPasswordValid) {
    if (userEmail === user.id && userPassword === user.pw) {
      window.location.href = "welcome.html";
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  }
});
