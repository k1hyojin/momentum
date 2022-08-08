const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const box = document.querySelector("#box");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const FRAME_NAME = "box";
const pages = ["www.naver.com","www.daum.net","www.google.com","www.github.com","www.netflix.com"]
const bookmark = document.querySelectorAll("#bookmarks > li");

function onLoginSubmit(tomato) {
    tomato.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    playList(currentMusic); //로그인 후 재생
}
logout.addEventListener("click",()=>{
    localStorage.removeItem(TODOS_KEY);
    if(confirm("로그아웃 하시면 입력된 정보가 모두 사라집니다. 로그아웃 하시겠습니까?")){
        localStorage.removeItem(USERNAME_KEY);
        location.reload();
    }else{
        return false;
    }
});

function paintGreetings(username){
    greeting.innerText = `${username} 😊`;
    box.classList.toggle(FRAME_NAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    playList(currentMusic); // 로그인 되어있을때 재생
}

// ------------ bookmark --------------
function gopage(){
    let num = 0;
    const booknum = bookmark.length;
    do{
        bookmark[num].innerHTML=`<a href="https://${pages[num]}" target="_blank"></a>`;
        num++;
    }while(num<booknum);
}

gopage();
