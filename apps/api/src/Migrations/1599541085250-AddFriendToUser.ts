import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFriendToUser1599541085250 implements MigrationInterface {
    name = 'AddFriendToUser1599541085250'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "parent_id" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_acb096eef4d8b5acdd7acbb5c84" FOREIGN KEY ("parent_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_acb096eef4d8b5acdd7acbb5c84"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "parent_id"`);
    }

}
