namespace backend.Dtos;

public record class SocialDto
(
  string Platform,
  string Username,
  string Url,
  int? ProfileId
);