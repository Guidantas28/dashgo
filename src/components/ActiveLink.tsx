import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement
    shoudlMatchExactHref?: boolean;
}

export function ActiveLink({children, shoudlMatchExactHref=false, ...rest}: ActiveLinkProps) {
    const { asPath } = useRouter()
    let isActive = false;

    if(shoudlMatchExactHref && (asPath === rest.href || asPath === rest.as)){
        isActive = true
    }

    if(!shoudlMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true
    }

    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400': 'gray.50'
            })}
        </Link>
    )
}