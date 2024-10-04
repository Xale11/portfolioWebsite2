using backend.Data;
using backend.Dtos;
using backend.Entities;
using backend.Mapping;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connString = builder.Configuration.GetConnectionString("SqlServerConnString");

builder.Services.AddDbContext<PortfolioDb>(options =>
  options.UseSqlServer(connString));

var app = builder.Build();

await app.MigrateDbAsync();

app.MapGet("/", () => {
  return "Alex's Portfolio Database";
});

// PROJECTS

app.MapGet("/projects", async (PortfolioDb dbContext) => {
  return await dbContext.Projects.ToListAsync();
});

app.MapPost("/projects", async (ProjectDto newProject, PortfolioDb dbContext) => {
  var project = newProject.ToEntity();
  dbContext.Projects.Add(project);
  await dbContext.SaveChangesAsync();
  return Results.Ok(project);
});

// PROFILES

app.MapGet("/profiles", async (PortfolioDb dbContext) => {
  return await dbContext.Profiles.ToListAsync();
});

app.MapPost("/profiles", async (PortfolioDb dbContext, ProfileDto newProfile) => {
  var profile = newProfile.ToEntity();
  dbContext.Profiles.Add(profile);
  await dbContext.SaveChangesAsync();
  return Results.Ok(profile);
});

// SERVICES

app.MapGet("/services", async (PortfolioDb dbContext) => {
  return await dbContext.Services.ToListAsync();
});

app.MapPost("/services", async (PortfolioDb dbContext, ServiceDto newService) => {
  var service = newService.ToEntity();
  dbContext.Services.Add(service);
  await dbContext.SaveChangesAsync();
  return Results.Ok(service);
});

// SOCIALS

app.MapGet("/socials", async (PortfolioDb dbContext) => {
  return await dbContext.SocialMediaContacts.ToListAsync();
});

app.MapPost("/socials", async (PortfolioDb dbContext, SocialDto newSocial) => {
  var social = newSocial.ToEntity();
  dbContext.SocialMediaContacts.Add(social);
  await dbContext.SaveChangesAsync();
  return Results.Ok(social);
});

app.Run();