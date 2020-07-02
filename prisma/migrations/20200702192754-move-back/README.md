# Migration `20200702192754-move-back`

This migration has been generated at 7/2/2020, 7:27:54 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Records" ALTER COLUMN "glucose" SET DATA TYPE text ,
ALTER COLUMN "insulin" SET DATA TYPE text ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200702192435-int-migration..20200702192754-move-back
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
-  insulin    Int
-  glucose    Int
+  insulin    String
+  glucose    String
   dateTime   String
   medication Boolean
   user       User     @relation(fields: [userId], references: [id])
   userId     Int      // 🚨🚓
```


