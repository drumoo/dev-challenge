using MultSearchWebAPI.Domain.DTO;

namespace MultSearchWebAPI.Services
{
  public interface ISearchService
  {
    SearchDTO Buscar(string text = "");
  }
}