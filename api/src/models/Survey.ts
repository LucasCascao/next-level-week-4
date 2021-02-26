import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';


@Entity("surveys")
class Survey {

    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "title" })
    title: string;

    @Column({ name: "description" })
    description: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

}

export { Survey };