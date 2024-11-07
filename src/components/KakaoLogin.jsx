// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
// </head>
// <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.min.js"
//   integrity="sha384-kLbo2SvoNtOFiniJ1EQ9o2iDA8i3xp+O6Cns+L5cd4RsOJfl+43z5pvieT2ayq3C" crossorigin="anonymous"></script>
// <script>
//   Kakao.init('372795b544cc498da17f69958651f67f'); 
//   // 사용하려는 앱의 JavaScript 키 입력
// </script>

// <a id="kakao-login-btn" href="javascript:loginWithKakao()">
//   <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
//     alt="카카오 로그인 버튼" />
// </a>
// <p id="token-result"></p>
// <button class="api-btn" onclick="requestUserInfo()" style="visibility:hidden">사용자 정보 가져오기</button>

// <script>
//   function loginWithKakao() {
//     Kakao.Auth.login({
//       redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
//       state: 'userme',
//     });
//   }

//   function requestUserInfo() {
//     Kakao.API.request({
//       url: '/v2/user/me',
//     })
//       .then(function(res) {
//         alert(JSON.stringify(res));
//       })
//       .catch(function(err) {
//         alert(
//           'failed to request user information: ' + JSON.stringify(err)
//         );
//       });
//   }

//   // 아래는 데모를 위한 UI 코드입니다.
//   displayToken()
//   function displayToken() {
//     var token = getCookie('authorize-access-token');

//     if(token) {
//       Kakao.Auth.setAccessToken(token);
//       document.querySelector('#token-result').innerText = 'login success, ready to request API';
//       document.querySelector('button.api-btn').style.visibility = 'visible';
//     }
//   }

//   function getCookie(name) {
//     var parts = document.cookie.split(name + '=');
//     if (parts.length === 2) { return parts[1].split(';')[0]; }
//   }
// </script>
