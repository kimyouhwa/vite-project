import {useState.useRef} from'react';
//간단한 회원 가입 폼 1.이름 2.생년월일 3.국적 4.자기소개 
const Register = () => {
    // const [name, setName] = useState('이름 ');
    // const [birth, setBirth] = useState(' ');
    // const [country, setCountry] = useState(' ');
    // const [bio, setBio] = useState(' '); 
    //하나로 만들어 주기 (아래)
    const [input , setInput] = useState({
        name: '', //props
        birth: '',
        country: '',
        bio: '',
    });

    const onChange = (e) => {
        setInput({
           ...input,  //스프레드 연산자. 변경 하고자 하는 것만 
           [e.target.name] : e.target.value,
        });
    }
    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,  //스프레드 연산자. 변경 하고자 하는 것만 바꾸기 위함 
    //         name : e.target.value,
    //     });
    // };
    
    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,  //스프레드 연산자. 변경 하고자 하는 것만 
    //         birth : e.target.value,
    //     });
    // };
    
    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,  //스프레드 연산자. 변경 하고자 하는 것만 
    //        bio : e.target.value,
    //     });
    // };

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,  //스프레드 연산자. 변경 하고자 하는 것만 
    //         country : e.target.value,
    //     });
    // };

    return (
        <div>
            <div>
            <input 
            name= "name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} 
           />
        </div>

        <div>
            <input 
            name= "birth"
            value={input.birth}
            onChange={onChange} 
            type={"date"} 
            />
        </div>

        <div>
            <select  name = "country" value ={input.country} onChange={onChange}>
                <option value=""></option> 
                <option value="KOR">한국</option>
                <option value="USA">미국</option>
                <option value="JPN">일본</option>
            </select>
        </div>

       <div>
        <textarea 
        name ="bio" 
        value={input.bio} 
        onChange={onChange}
        />
       </div>
    </div>
    );
};
export default Register;
