import * as HttpResponse from "../utils/http-helper"
import * as ClubsRepository from "../repositories/clubs-repository"

export const getClubService = async () => {
    const data = await ClubsRepository.findAllClubs();
    let res = HttpResponse.ok(data);
    return res;
}