import "./CartUser.css"
import { Cart } from "./Cart"
export function CartUser() {

    return (
        <div className="container">
            <div id="perfilUser">
                <img id="fede" src="https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.6435-9/75278309_1313778228803184_2880870221692796928_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C6tT5aH0QMkAX_WbtBf&_nc_ht=scontent.fmvd1-1.fna&oh=00_AfD_hN22xg76Ba9ud2lQftYDeMniBno6gwH-MnoidnDUrg&oe=63BDE653"/>
                <p id="nameUser">Fede</p>
            </div>
            <Cart/>
        </div>
    )
}