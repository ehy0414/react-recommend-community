// 유효성 검사
export const validateField = (name, value) => {
    if (!value.trim()) return "필수 입력 항목입니다.";
  
    switch (name) {
      case "name":
        return value.length >= 2 ? "" : "이름은 최소 2글자 이상이어야 합니다.";
  
      case "email":
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ""
          : "유효한 이메일 주소를 입력하세요.";
  
      case "password":
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)
          ? ""
          : "비밀번호는 영문+숫자+특수문자 포함 6자 이상이어야 합니다.";
  
      default:
        return "";
    }
  };
  