import { getManager, UpdateResult, DeleteResult } from 'typeorm';
import { Album } from '../Entities/Album';

export class AlbumRepositorio{

    crearAlbum(album:Album):Promise<Album>{
        return getManager().getRepository(Album).save(Album);
    }

    obtenerListaAlbum():Promise<Album[]>{
        return getManager().getRepository(Album).createQueryBuilder('Album')
        .select(['Album.id', 'Album.titulo', 'Album.artista'])
        .getMany(); // getOne
    }

    obtenerAlbum(idAlbum:number):Promise<Album>{
        return getManager().getRepository(Album).findOne({
            where:{
                id:idAlbum
            }
        });
    }

    actualizarAlbum(idAlbum:string, nuevosDatosAlbum):Promise<UpdateResult>{
        return getManager().getRepository(Album).update({id:idAlbum}, nuevosDatosAlbum);
    }

    eliminarAlbum(idAlbum: string):Promise<DeleteResult>{
        return getManager().getRepository(Album).delete({id:idAlbum});
    }


}