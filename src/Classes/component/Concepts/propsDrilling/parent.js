import { Children } from "./children";
export function Parent(){
    let parent  = "Iam your parent component";

    return(
        <>
        <h3>This is parent component</h3>
        <Children data = {parent}></Children>
        </>
    )
}