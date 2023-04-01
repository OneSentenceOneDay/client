function tokenNotValid() {
	sessionStorage.clear();
	alert("로그아웃 되었습니다. 다시 로그인해주세요.");
	window.location.reload(); // 새로고침
}

export default tokenNotValid;
