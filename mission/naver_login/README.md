# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

처음에는 로그인버튼에 이벤트리스너를 넣어보려했는데 자꾸 405오류가 떠서 실패했습니다.
(틀리게 했을지도모르지만)
처음 시도했던 코드

```
const loginButton = document.querySelector(".btn-login");

loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 동작 중지

    const userEmail = emailInput.value;
    const userPassword = pwdInput.value;

    // 이메일 유효 검사
    const isEmailValid = emailReg(userEmail);
    if (isEmailValid) {
      emailInput.classList.remove("is--invalid");
    } else {
      emailInput.classList.add("is--invalid");
    }

    // 비밀번호 유효 검사
    const isPasswordValid = pwReg(userPassword);
    if (isPasswordValid) {
      pwdInput.classList.remove("is--invalid");
    } else {
      pwdInput.classList.add("is--invalid");
    }

    // 비교
    if (isEmailValid && isPasswordValid) {
      if (userEmail === user.id && userPassword === user.pw) {
        window.location.href = "welcome.html";
      } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
    }
  });

지금은 이걸로 해도 되는거같습니다 해결했어요!

```

해결을위해 찾던중 비슷한문제가있던 블로그

<form action="URL" class="login-form" method="POST">에서
Http request를 시도했는데 정확한 서버도 아닌 있지도 않은 서버에게 요청을 해서 발생한 문제라는 걸 찾아냈다 라는 글을보았습니다

1. loginButton이 아닌 form태그에 이벤트 함수를 작성해주었다.

2. 기존의 click이 아닌 폼의 제출을 감지하고 처리하기 위해서는 submit 이벤트를 사용해야 하기 때문에 submit으로 수정해주었다.

3. event.preventDefault();
   어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정

form의 경우, 제출(submit) 버튼을 클릭하면 기본적으로 폼 데이터를 서버로 전송하고 페이지를 다시 로드하는 동작이 수행되는데,
지금 프로젝트에서는 서버가 없기 때문에 이 동작을 막아주기 위해 추가해줬다.

이런식으로 해결해보셧다고 남겨주셧는데 이게 맞는지 잘모르겠습니다!
