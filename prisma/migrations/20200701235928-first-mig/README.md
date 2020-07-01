# Migration `20200701235928-first-mig`

This migration has been generated at 7/1/2020, 11:59:28 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Records" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"dateTime" text  NOT NULL ,"glucose" text  NOT NULL ,"id" SERIAL,"insulin" text  NOT NULL ,"medication" boolean  NOT NULL ,"userId" integer  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Profile" (
"age" integer  NOT NULL ,"city" text  NOT NULL ,"country" text  NOT NULL ,"firstName" text  NOT NULL ,"id" SERIAL,"lastName" text  NOT NULL ,"picture" text  NOT NULL ,"userId" integer  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."User" (
"email" text  NOT NULL ,"id" SERIAL,"password" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Profile.userId" ON "public"."Profile"("userId")

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Records" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE

ALTER TABLE "public"."Profile" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200701235928-first-mig
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,44 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+// These are my models
+
+model Records {
+  id         Int      @default(autoincrement()) @id
+  createdAt  DateTime @default(now())
+  insulin    String
+  glucose    String
+  dateTime   String
+  medication Boolean
+  user       User     @relation(fields: [userId], references: [id])
+  userId     Int      // 🚨🚓
+}
+
+model Profile {
+  id        Int    @default(autoincrement()) @id
+  firstName String
+  lastName  String
+  age       Int
+  country   String
+  city      String
+  picture   String
+  user      User   @relation(fields: [userId], references: [id])
+  userId    Int    @unique
+}
+
+model User {
+  id       Int       @default(autoincrement()) @id
+  email    String    @unique
+  password String
+  records  Records[]
+  profile  Profile?
+}
```


