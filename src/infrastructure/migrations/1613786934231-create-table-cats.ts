import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableCats1613786934231 implements MigrationInterface {
    name = 'createTableCats1613786934231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shinra"."cats" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "age" character varying(120), "breed" character varying(120), "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_f0d6d40437ec6987ac419f39ac8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "shinra"."cats"`);
    }

}
