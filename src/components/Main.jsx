//importJSX주의 사항 
//1. 태그는 꼭 닫아야 한다.
//2. 최상위태그는 반드시 하나여야 한다. 
//3. 중괄호 내부에는 자바스크립트 표현식만 가능 하다. 답이 있는 스타일만 가능
//4. 숫자, 문자열, 배열값만 랜더링 된다. 
// const Main =() =>{
//     const User={
//         name: "유화",
//         islogin :true,
//     };

//     if(User.isLogin){
//         return <div>logOut</div>
        
//     }else{
//         return <div style = {{
//             backgroundColor: "red",
//             borderBottom: "5px solid black"
//         }}
//         >
//             logIn</div>
//     }
//     return (
//         <main>
//             <h1>Main</h1>
//             <h2>{number % 2 === 0 ? "짝수": "홀수"}</h2>
//         </main>
//     );
// };

// export default Main;