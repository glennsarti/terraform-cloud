import { EventEmitter } from 'events'
import terraformCloudApiClient from './terraformCloudApiClient'
import Account from './endpoints/Account'
import Plans from './endpoints/Plans'
import Applies from './endpoints/Applies'
import Runs from './endpoints/Runs'
import Workspaces from './endpoints/Workspaces'
import ConfigurationVersion from './endpoints/ConfigurationVersion'
import StateVersions from './endpoints/StateVersions'
import Organizations from './endpoints/Organizations'

export class TerraformCloud extends EventEmitter {
  public Account: Account
  public Plans: Plans
  public Runs: Runs
  public Applies: Applies
  public Workspaces: Workspaces
  public ConfigurationVersion: ConfigurationVersion
  public StateVersions: StateVersions
  public Organizations: Organizations

  constructor(apiKey: string) {
    super()
    const client = terraformCloudApiClient(apiKey)
    this.Account = new Account(client)
    this.Plans = new Plans(client)
    this.Runs = new Runs(client)
    this.Applies = new Applies(client)
    this.Workspaces = new Workspaces(client)
    this.ConfigurationVersion = new ConfigurationVersion(client)
    this.StateVersions = new StateVersions(client)
    this.Organizations = new Organizations(client)
  }
}
