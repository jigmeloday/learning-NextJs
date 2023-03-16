import Link from "next/link";
import classes from "./button.module.css";

function Button(props: any) {
    return props.link ? (
        <Link className={classes.btn} href={props.link}>{props.children}</Link>
    ): (
        <button
            className={classes.btn}
            onClick={props.onCLick}>
            { props.children }
        </button>
    )
}

export default Button;