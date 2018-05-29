import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export class Gurd1 implements CanActivate {
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean{
        let goodsId = route.params["goodsId"];
            // console.log(goodsId);
            if(goodsId == "556"){
                return false
            }else{
                return true;
            }
    }
}
