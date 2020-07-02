# Migration `20200702193134-name-conv`

This migration has been generated at 7/2/2020, 7:31:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200702192754-move-back..20200702193134-name-conv
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
@@ -18,9 +18,9 @@
   insulin    String
   glucose    String
   dateTime   String
   medication Boolean
-  user       User     @relation(fields: [userId], references: [id])
+  User       User     @relation(fields: [userId], references: [id])
   userId     Int      // 🚨🚓
 }
 model Profile {
```


