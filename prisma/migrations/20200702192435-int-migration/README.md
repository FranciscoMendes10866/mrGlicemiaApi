# Migration `20200702192435-int-migration`

This migration has been generated at 7/2/2020, 7:24:35 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Records" DROP COLUMN "glucose",
ADD COLUMN "glucose" integer  NOT NULL ,
DROP COLUMN "insulin",
ADD COLUMN "insulin" integer  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200701235928-first-mig..20200702192435-int-migration
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -14,10 +14,10 @@
 model Records {
   id         Int      @default(autoincrement()) @id
   createdAt  DateTime @default(now())
-  insulin    String
-  glucose    String
+  insulin    Int
+  glucose    Int
   dateTime   String
   medication Boolean
   user       User     @relation(fields: [userId], references: [id])
   userId     Int      // 🚨🚓
```


