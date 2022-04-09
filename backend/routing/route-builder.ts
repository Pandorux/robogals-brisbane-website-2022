import { CRUDConstants } from "./crud-constants";

export class RouteBuilder {
    private route: string;
    private _isFullyQualified: boolean;

    public get isFullyQualified(): boolean {
        return this._isFullyQualified;
    }

    private set isFullyQualified(fullyQualify: boolean) {
        this._isFullyQualified = fullyQualify;
    }

    constructor(route: string, isFullyQualified: boolean = false) {
        this.route = route;
        this.isFullyQualified = isFullyQualified;
    }

    Append(str: string): RouteBuilder {
        return new RouteBuilder(`${this.route}/${str}`, this.isFullyQualified);
    }

    AppendId(): RouteBuilder {
        return new RouteBuilder(`${this.route}/:id`, this.isFullyQualified);
    }

    AppendCreate(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.create}`, this.isFullyQualified);
    }

    AppendRead(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.read}`, this.isFullyQualified);
    }

    AppendUpdate(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.update}`, this.isFullyQualified);
    }

    AppendDelete(): RouteBuilder {
        return new RouteBuilder(`${this.route}/${CRUDConstants.delete}`, this.isFullyQualified);
    }

    ToString(): string {
        return this.route;
    }

    FullyQualify(): RouteBuilder {

        if (!this.isFullyQualified) {
            this.isFullyQualified = true;
            this.route = process.env.ATLAS_ENDPOINT + this.route;
        }
        
        return new RouteBuilder(this.route, this.isFullyQualified);
    }
}