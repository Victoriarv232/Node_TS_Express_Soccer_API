import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();
    let res = null;

    if(data){
        res = await HttpResponse.ok(data);
    }
    else{
        res = await HttpResponse.noContent();
    }
    
    return res;
};

export const getPlayerByIdService = async (id:number) => {
    const data = await PlayerRepository.findPlayerById(id);
    let res = null;
    
    if (data){
        res = await HttpResponse.ok(data);
    }
    else{
        res = await HttpResponse.noContent();
    }
    return res;
}

export const createPlayerService = async (player: PlayerModel) => {
    let res = null;
    if (Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player);
        res = await HttpResponse.created();
    }
    else{
        res = await HttpResponse.badRequest();
    }
        
    return res;
}

export const deletePlayerService = async (id: number) => {
    let res = null;
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);
    if ( isDeleted === true){
        await PlayerRepository.deleteOnePlayer(id);
        res = await HttpResponse.ok({ message: "deleted" });
    }
    else{
        res = await HttpResponse.badRequest();
    }
    return res;
}

export const updatePlayerService = async (id: number, statistics:StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    let res = null;

    if (!data || Object.keys(data).length === 0){
        res = await HttpResponse.badRequest();
    }
    else{
        res = await HttpResponse.ok(data);
    }
    return res;
}