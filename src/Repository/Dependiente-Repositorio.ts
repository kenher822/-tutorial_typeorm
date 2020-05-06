import { getManager, UpdateResult, DeleteResult, RelationQueryBuilder } from 'typeorm';
import { Dependiente } from '../Entities/Dependiente';

export class DependienteRepositorio{

    crearDependiente(dependiente:Dependiente):Promise<Dependiente>{
        return getManager().getRepository(Dependiente).save(dependiente);
    }

    obtenerListaDependiente():Promise<Dependiente[]>{
        return getManager().getRepository(Dependiente).createQueryBuilder('Dependiente')
        .select(['Dependiente.id', 'Dependiente.nombre', 'Dependiente.apellido'])
        .getMany(); // getOne
    }

    obtenerDependiente(idDependiente: number): Promise<Dependiente>{
        return getManager().getRepository(Dependiente).findOne({
            where:{
                id: idDependiente
            }
        });
    }

    actualizarDependiente(idDependiente:string, nuevosDatosDependiente:Dependiente):Promise<UpdateResult>{
        return getManager().getRepository(Dependiente).update({id:idDependiente}, nuevosDatosDependiente);
    }

    eliminarDependiente(idDependiente: string): Promise<DeleteResult>{
        return getManager().getRepository(Dependiente).delete({id:idDependiente});
    }
}
