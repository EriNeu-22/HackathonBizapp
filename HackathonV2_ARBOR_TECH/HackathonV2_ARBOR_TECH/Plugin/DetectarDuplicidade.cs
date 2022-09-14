using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackathonV2_ARBOR_TECH
{
    public class OnCerate_Contato_Conta_DetectarDuplicidade : IPlugin

    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));

            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var trackingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.InputParameters["Target"] is Entity)
            {
                var entidade = (Entity)context.InputParameters["Target"];
                var filter = string.Empty;
                if (entidade.LogicalName == "account")
                {
                    string cnpj = entidade.Attributes.Keys.Contains("arbor_cnpj_conta") ? ((string)entidade["arbor_cnpj_conta"]) : string.Empty;
                    filter = @"<filter type = 'and' >          
                                                <filter type = 'or' >           
                                                    <condition attribute = 'arbor_cnpj_conta' operator= 'eq' value = '" + cnpj + @"' />               
                                                                      
                                                </filter >                   
                                            </filter >";


                }
                else if (entidade.LogicalName == "contact")
                {
                    string email = entidade.Attributes.Keys.Contains("emailaddress1") ? ((string)entidade["emailaddress1"]) : string.Empty;
                    string telefone = entidade.Attributes.Keys.Contains("telephone1") ? ((string)entidade["telephone1"]) : string.Empty;

                    filter = @"<filter type = 'and' >          
                                                <filter type = 'or' >           
                                                    <condition attribute = 'emailaddress1' operator= 'eq' value = '" + email + @"' />               
                                                    <condition attribute = 'telephone1' operator= 'eq' value = '" + telefone + @"' />                   
                                                </filter >                   
                                            </filter >";
                }
                else
                    throw new InvalidPluginExecutionException($"ERRO!!!");


                string fetch = @"  <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                                        <entity name = '" + entidade.LogicalName + @"' >
                                            "+ filter +@"                                                               
                                        </entity >
                                    </fetch >  ";               

                

                var retorno = service.RetrieveMultiple(new FetchExpression(fetch));
                if (retorno?.Entities.Count > 0) 
                {
                    throw new InvalidPluginExecutionException($"Os dados informados já foram cadastrados no sistema");
                }
            }
        }
    }
}
