using backend.Data;
using Microsoft.EntityFrameworkCore;

namespace backend.Entities;

public static class DataExtensions
{
  public static async Task MigrateDbAsync(this WebApplication app)
  {
    using var scope = app.Services.CreateScope();
    var dbContext = scope.ServiceProvider.GetRequiredService<PortfolioDb>();
    await dbContext.Database.MigrateAsync();
  }
}