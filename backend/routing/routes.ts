import { CollectionConstants } from "./collection-constants.ts";
import { RouteBuilder } from "./route-builder.ts";

const Routes = class Routes {   
    public static deliveryType: RouteBuilder = new RouteBuilder(CollectionConstants.deliveryType);
    public static eventType: RouteBuilder = new RouteBuilder(CollectionConstants.eventType);
    public static event: RouteBuilder = new RouteBuilder(CollectionConstants.event);
    public static execRole: RouteBuilder = new RouteBuilder(CollectionConstants.execRole);
    public static partner: RouteBuilder = new RouteBuilder(CollectionConstants.partner);
    public static partnershipType: RouteBuilder = new RouteBuilder(CollectionConstants.partnershipType);
    public static schoolType: RouteBuilder = new RouteBuilder(CollectionConstants.schoolType);
    public static school: RouteBuilder = new RouteBuilder(CollectionConstants.volunteer);
    public static volunteer: RouteBuilder = new RouteBuilder(CollectionConstants.volunteer);
    public static workshopType: RouteBuilder = new RouteBuilder(CollectionConstants.workshopType);
    public static workshop: RouteBuilder = new RouteBuilder(CollectionConstants.workshop);
}

module.exports = Routes;





