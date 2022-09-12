using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HackathonV2_ARBOR_TECH
{
    public class OnCerate_Contato_DetectarDuplicidade : IPlugin

    {
        public void Execute(IServiceProvider serviceProvider)
        {
            var serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));

            var context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            var service = serviceFactory.CreateOrganizationService(context.UserId);

            var trackingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));
            if (context.InputParameters["Target"] is Entity)
            {
                var contato = (Entity)context.InputParameters["Target"];
                string email = contato.Attributes.Keys.Contains("emailaddress1") ? ((string)contato["emailaddress1"]) : string.Empty;
                string telefone = contato.Attributes.Keys.Contains("telephone1") ? ((string)contato["telephone1"]) : string.Empty;

                string fetch = @"  <fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
                                        <entity name = 'contact' >   
                                            <attribute name = 'fullname' />   
                                            <attribute name = 'telephone1' />     
                                            <attribute name = 'contactid' />      
                                            <order attribute = 'fullname' descending = 'false' />         
                                            <filter type = 'and' >          
                                                <filter type = 'or' >           
                                                    <condition attribute = 'emailaddress1' operator= 'eq' value = '"+ email + @"' />               
                                                    <condition attribute = 'telephone1' operator= 'eq' value = '"+telefone+@"' />                   
                                                </filter >                   
                                            </filter >                   
                                        </entity >
                                    </fetch >  ";

                    var retorno = service.RetrieveMultiple(new FetchExpression(fetch));

                if (retorno?.Entities.Count > 0) 
                {
                    throw new InvalidPluginExecutionException($"Já existe um contato com o Email: {email} ou com o Telefone: {telefone}");
                }
            }
        }
    }
}
