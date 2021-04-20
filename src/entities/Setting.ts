import { Column, Entity, UpdateDateColumn, CreateDateColumn, PrimaryColumn, TreeChildren } from "typeorm";

import { v4 as uuid} from "uuid";

@Entity("settings")
class Setting {
    @PrimaryColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    update_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        this.id = !this.id ? uuid() : this.id;
    }
}

export { Setting }