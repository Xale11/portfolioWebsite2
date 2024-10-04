using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdatedForeignKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SocialMediaContacts_Profiles_ProfileId1",
                table: "SocialMediaContacts");

            migrationBuilder.DropIndex(
                name: "IX_SocialMediaContacts_ProfileId1",
                table: "SocialMediaContacts");

            migrationBuilder.DropColumn(
                name: "ProfileId1",
                table: "SocialMediaContacts");

            migrationBuilder.AlterColumn<int>(
                name: "ProfileId",
                table: "SocialMediaContacts",
                type: "int",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_SocialMediaContacts_ProfileId",
                table: "SocialMediaContacts",
                column: "ProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_SocialMediaContacts_Profiles_ProfileId",
                table: "SocialMediaContacts",
                column: "ProfileId",
                principalTable: "Profiles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SocialMediaContacts_Profiles_ProfileId",
                table: "SocialMediaContacts");

            migrationBuilder.DropIndex(
                name: "IX_SocialMediaContacts_ProfileId",
                table: "SocialMediaContacts");

            migrationBuilder.AlterColumn<string>(
                name: "ProfileId",
                table: "SocialMediaContacts",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProfileId1",
                table: "SocialMediaContacts",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SocialMediaContacts_ProfileId1",
                table: "SocialMediaContacts",
                column: "ProfileId1");

            migrationBuilder.AddForeignKey(
                name: "FK_SocialMediaContacts_Profiles_ProfileId1",
                table: "SocialMediaContacts",
                column: "ProfileId1",
                principalTable: "Profiles",
                principalColumn: "Id");
        }
    }
}
