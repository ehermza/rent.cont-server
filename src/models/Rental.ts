
import { Schema, Document, model } from "mongoose"

export interface RgtDeuda {
    value: number;
    period: String;
}

export interface RgtPago {
    value: number;
    period: String;
    paid_at: Date;
    recibo_n: String;
}

/**
 * Class created by EHER Date: Sept.06th, 2021
 *  rent.containers-ng project. ver beta.
 */

 export interface IRental extends Document {
    id_client: String;
    id_container: String;

    active: Boolean;
    date_init: Date;
    date_final: Date;

    deuda_total: number;
    deuda_register: Array<RgtDeuda>;

    pagos_total: number;
    pagos_register: Array<RgtPago>;
 }

const rentalSchema = new Schema(
    {
        id_client: String,
        id_container: String,

        active: Boolean,
        date_init: Date,
        date_final: Date,

        deuda_total: Number,
        deuda_register: [{value: Number,period: String}],

        pagos_total: Number,
        pagos_register: [{
            value: Number,
            period: String,
            paid_at: Date,
            recibo_n: String
        }]
   }
)

export default model<IRental>('rental', rentalSchema);