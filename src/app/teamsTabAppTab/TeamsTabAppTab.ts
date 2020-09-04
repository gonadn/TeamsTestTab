import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamsTabAppTab/index.html")
@PreventIframe("/teamsTabAppTab/config.html")
@PreventIframe("/teamsTabAppTab/remove.html")
export class TeamsTabAppTab {
}
