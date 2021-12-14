/**
 * Operations Insights API
 * Use the Operations Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Operations Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as AddExadataInsightMembersRequest from "./add-exadata-insight-members-request";
export import AddExadataInsightMembersRequest = AddExadataInsightMembersRequest.AddExadataInsightMembersRequest;
import * as ChangeDatabaseInsightCompartmentRequest from "./change-database-insight-compartment-request";
export import ChangeDatabaseInsightCompartmentRequest = ChangeDatabaseInsightCompartmentRequest.ChangeDatabaseInsightCompartmentRequest;
import * as ChangeEnterpriseManagerBridgeCompartmentRequest from "./change-enterprise-manager-bridge-compartment-request";
export import ChangeEnterpriseManagerBridgeCompartmentRequest = ChangeEnterpriseManagerBridgeCompartmentRequest.ChangeEnterpriseManagerBridgeCompartmentRequest;
import * as ChangeExadataInsightCompartmentRequest from "./change-exadata-insight-compartment-request";
export import ChangeExadataInsightCompartmentRequest = ChangeExadataInsightCompartmentRequest.ChangeExadataInsightCompartmentRequest;
import * as ChangeHostInsightCompartmentRequest from "./change-host-insight-compartment-request";
export import ChangeHostInsightCompartmentRequest = ChangeHostInsightCompartmentRequest.ChangeHostInsightCompartmentRequest;
import * as CreateAwrHubRequest from "./create-awr-hub-request";
export import CreateAwrHubRequest = CreateAwrHubRequest.CreateAwrHubRequest;
import * as CreateDatabaseInsightRequest from "./create-database-insight-request";
export import CreateDatabaseInsightRequest = CreateDatabaseInsightRequest.CreateDatabaseInsightRequest;
import * as CreateEnterpriseManagerBridgeRequest from "./create-enterprise-manager-bridge-request";
export import CreateEnterpriseManagerBridgeRequest = CreateEnterpriseManagerBridgeRequest.CreateEnterpriseManagerBridgeRequest;
import * as CreateExadataInsightRequest from "./create-exadata-insight-request";
export import CreateExadataInsightRequest = CreateExadataInsightRequest.CreateExadataInsightRequest;
import * as CreateHostInsightRequest from "./create-host-insight-request";
export import CreateHostInsightRequest = CreateHostInsightRequest.CreateHostInsightRequest;
import * as CreateOperationsInsightsWarehouseRequest from "./create-operations-insights-warehouse-request";
export import CreateOperationsInsightsWarehouseRequest = CreateOperationsInsightsWarehouseRequest.CreateOperationsInsightsWarehouseRequest;
import * as CreateOperationsInsightsWarehouseUserRequest from "./create-operations-insights-warehouse-user-request";
export import CreateOperationsInsightsWarehouseUserRequest = CreateOperationsInsightsWarehouseUserRequest.CreateOperationsInsightsWarehouseUserRequest;
import * as DeleteAwrHubRequest from "./delete-awr-hub-request";
export import DeleteAwrHubRequest = DeleteAwrHubRequest.DeleteAwrHubRequest;
import * as DeleteDatabaseInsightRequest from "./delete-database-insight-request";
export import DeleteDatabaseInsightRequest = DeleteDatabaseInsightRequest.DeleteDatabaseInsightRequest;
import * as DeleteEnterpriseManagerBridgeRequest from "./delete-enterprise-manager-bridge-request";
export import DeleteEnterpriseManagerBridgeRequest = DeleteEnterpriseManagerBridgeRequest.DeleteEnterpriseManagerBridgeRequest;
import * as DeleteExadataInsightRequest from "./delete-exadata-insight-request";
export import DeleteExadataInsightRequest = DeleteExadataInsightRequest.DeleteExadataInsightRequest;
import * as DeleteHostInsightRequest from "./delete-host-insight-request";
export import DeleteHostInsightRequest = DeleteHostInsightRequest.DeleteHostInsightRequest;
import * as DeleteOperationsInsightsWarehouseRequest from "./delete-operations-insights-warehouse-request";
export import DeleteOperationsInsightsWarehouseRequest = DeleteOperationsInsightsWarehouseRequest.DeleteOperationsInsightsWarehouseRequest;
import * as DeleteOperationsInsightsWarehouseUserRequest from "./delete-operations-insights-warehouse-user-request";
export import DeleteOperationsInsightsWarehouseUserRequest = DeleteOperationsInsightsWarehouseUserRequest.DeleteOperationsInsightsWarehouseUserRequest;
import * as DisableDatabaseInsightRequest from "./disable-database-insight-request";
export import DisableDatabaseInsightRequest = DisableDatabaseInsightRequest.DisableDatabaseInsightRequest;
import * as DisableExadataInsightRequest from "./disable-exadata-insight-request";
export import DisableExadataInsightRequest = DisableExadataInsightRequest.DisableExadataInsightRequest;
import * as DisableHostInsightRequest from "./disable-host-insight-request";
export import DisableHostInsightRequest = DisableHostInsightRequest.DisableHostInsightRequest;
import * as DownloadOperationsInsightsWarehouseWalletRequest from "./download-operations-insights-warehouse-wallet-request";
export import DownloadOperationsInsightsWarehouseWalletRequest = DownloadOperationsInsightsWarehouseWalletRequest.DownloadOperationsInsightsWarehouseWalletRequest;
import * as EnableDatabaseInsightRequest from "./enable-database-insight-request";
export import EnableDatabaseInsightRequest = EnableDatabaseInsightRequest.EnableDatabaseInsightRequest;
import * as EnableExadataInsightRequest from "./enable-exadata-insight-request";
export import EnableExadataInsightRequest = EnableExadataInsightRequest.EnableExadataInsightRequest;
import * as EnableHostInsightRequest from "./enable-host-insight-request";
export import EnableHostInsightRequest = EnableHostInsightRequest.EnableHostInsightRequest;
import * as GetAwrHubRequest from "./get-awr-hub-request";
export import GetAwrHubRequest = GetAwrHubRequest.GetAwrHubRequest;
import * as GetAwrReportRequest from "./get-awr-report-request";
export import GetAwrReportRequest = GetAwrReportRequest.GetAwrReportRequest;
import * as GetDatabaseInsightRequest from "./get-database-insight-request";
export import GetDatabaseInsightRequest = GetDatabaseInsightRequest.GetDatabaseInsightRequest;
import * as GetEnterpriseManagerBridgeRequest from "./get-enterprise-manager-bridge-request";
export import GetEnterpriseManagerBridgeRequest = GetEnterpriseManagerBridgeRequest.GetEnterpriseManagerBridgeRequest;
import * as GetExadataInsightRequest from "./get-exadata-insight-request";
export import GetExadataInsightRequest = GetExadataInsightRequest.GetExadataInsightRequest;
import * as GetHostInsightRequest from "./get-host-insight-request";
export import GetHostInsightRequest = GetHostInsightRequest.GetHostInsightRequest;
import * as GetOperationsInsightsWarehouseRequest from "./get-operations-insights-warehouse-request";
export import GetOperationsInsightsWarehouseRequest = GetOperationsInsightsWarehouseRequest.GetOperationsInsightsWarehouseRequest;
import * as GetOperationsInsightsWarehouseUserRequest from "./get-operations-insights-warehouse-user-request";
export import GetOperationsInsightsWarehouseUserRequest = GetOperationsInsightsWarehouseUserRequest.GetOperationsInsightsWarehouseUserRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as IngestDatabaseConfigurationRequest from "./ingest-database-configuration-request";
export import IngestDatabaseConfigurationRequest = IngestDatabaseConfigurationRequest.IngestDatabaseConfigurationRequest;
import * as IngestHostConfigurationRequest from "./ingest-host-configuration-request";
export import IngestHostConfigurationRequest = IngestHostConfigurationRequest.IngestHostConfigurationRequest;
import * as IngestHostMetricsRequest from "./ingest-host-metrics-request";
export import IngestHostMetricsRequest = IngestHostMetricsRequest.IngestHostMetricsRequest;
import * as IngestSqlBucketRequest from "./ingest-sql-bucket-request";
export import IngestSqlBucketRequest = IngestSqlBucketRequest.IngestSqlBucketRequest;
import * as IngestSqlPlanLinesRequest from "./ingest-sql-plan-lines-request";
export import IngestSqlPlanLinesRequest = IngestSqlPlanLinesRequest.IngestSqlPlanLinesRequest;
import * as IngestSqlStatsRequest from "./ingest-sql-stats-request";
export import IngestSqlStatsRequest = IngestSqlStatsRequest.IngestSqlStatsRequest;
import * as IngestSqlTextRequest from "./ingest-sql-text-request";
export import IngestSqlTextRequest = IngestSqlTextRequest.IngestSqlTextRequest;
import * as ListAwrHubsRequest from "./list-awr-hubs-request";
export import ListAwrHubsRequest = ListAwrHubsRequest.ListAwrHubsRequest;
import * as ListAwrSnapshotsRequest from "./list-awr-snapshots-request";
export import ListAwrSnapshotsRequest = ListAwrSnapshotsRequest.ListAwrSnapshotsRequest;
import * as ListDatabaseConfigurationsRequest from "./list-database-configurations-request";
export import ListDatabaseConfigurationsRequest = ListDatabaseConfigurationsRequest.ListDatabaseConfigurationsRequest;
import * as ListDatabaseInsightsRequest from "./list-database-insights-request";
export import ListDatabaseInsightsRequest = ListDatabaseInsightsRequest.ListDatabaseInsightsRequest;
import * as ListEnterpriseManagerBridgesRequest from "./list-enterprise-manager-bridges-request";
export import ListEnterpriseManagerBridgesRequest = ListEnterpriseManagerBridgesRequest.ListEnterpriseManagerBridgesRequest;
import * as ListExadataConfigurationsRequest from "./list-exadata-configurations-request";
export import ListExadataConfigurationsRequest = ListExadataConfigurationsRequest.ListExadataConfigurationsRequest;
import * as ListExadataInsightsRequest from "./list-exadata-insights-request";
export import ListExadataInsightsRequest = ListExadataInsightsRequest.ListExadataInsightsRequest;
import * as ListHostConfigurationsRequest from "./list-host-configurations-request";
export import ListHostConfigurationsRequest = ListHostConfigurationsRequest.ListHostConfigurationsRequest;
import * as ListHostInsightsRequest from "./list-host-insights-request";
export import ListHostInsightsRequest = ListHostInsightsRequest.ListHostInsightsRequest;
import * as ListHostedEntitiesRequest from "./list-hosted-entities-request";
export import ListHostedEntitiesRequest = ListHostedEntitiesRequest.ListHostedEntitiesRequest;
import * as ListImportableAgentEntitiesRequest from "./list-importable-agent-entities-request";
export import ListImportableAgentEntitiesRequest = ListImportableAgentEntitiesRequest.ListImportableAgentEntitiesRequest;
import * as ListImportableEnterpriseManagerEntitiesRequest from "./list-importable-enterprise-manager-entities-request";
export import ListImportableEnterpriseManagerEntitiesRequest = ListImportableEnterpriseManagerEntitiesRequest.ListImportableEnterpriseManagerEntitiesRequest;
import * as ListOperationsInsightsWarehouseUsersRequest from "./list-operations-insights-warehouse-users-request";
export import ListOperationsInsightsWarehouseUsersRequest = ListOperationsInsightsWarehouseUsersRequest.ListOperationsInsightsWarehouseUsersRequest;
import * as ListOperationsInsightsWarehousesRequest from "./list-operations-insights-warehouses-request";
export import ListOperationsInsightsWarehousesRequest = ListOperationsInsightsWarehousesRequest.ListOperationsInsightsWarehousesRequest;
import * as ListSqlPlansRequest from "./list-sql-plans-request";
export import ListSqlPlansRequest = ListSqlPlansRequest.ListSqlPlansRequest;
import * as ListSqlSearchesRequest from "./list-sql-searches-request";
export import ListSqlSearchesRequest = ListSqlSearchesRequest.ListSqlSearchesRequest;
import * as ListSqlTextsRequest from "./list-sql-texts-request";
export import ListSqlTextsRequest = ListSqlTextsRequest.ListSqlTextsRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
import * as RotateOperationsInsightsWarehouseWalletRequest from "./rotate-operations-insights-warehouse-wallet-request";
export import RotateOperationsInsightsWarehouseWalletRequest = RotateOperationsInsightsWarehouseWalletRequest.RotateOperationsInsightsWarehouseWalletRequest;
import * as SummarizeAwrSourcesSummariesRequest from "./summarize-awr-sources-summaries-request";
export import SummarizeAwrSourcesSummariesRequest = SummarizeAwrSourcesSummariesRequest.SummarizeAwrSourcesSummariesRequest;
import * as SummarizeDatabaseInsightResourceCapacityTrendRequest from "./summarize-database-insight-resource-capacity-trend-request";
export import SummarizeDatabaseInsightResourceCapacityTrendRequest = SummarizeDatabaseInsightResourceCapacityTrendRequest.SummarizeDatabaseInsightResourceCapacityTrendRequest;
import * as SummarizeDatabaseInsightResourceForecastTrendRequest from "./summarize-database-insight-resource-forecast-trend-request";
export import SummarizeDatabaseInsightResourceForecastTrendRequest = SummarizeDatabaseInsightResourceForecastTrendRequest.SummarizeDatabaseInsightResourceForecastTrendRequest;
import * as SummarizeDatabaseInsightResourceStatisticsRequest from "./summarize-database-insight-resource-statistics-request";
export import SummarizeDatabaseInsightResourceStatisticsRequest = SummarizeDatabaseInsightResourceStatisticsRequest.SummarizeDatabaseInsightResourceStatisticsRequest;
import * as SummarizeDatabaseInsightResourceUsageRequest from "./summarize-database-insight-resource-usage-request";
export import SummarizeDatabaseInsightResourceUsageRequest = SummarizeDatabaseInsightResourceUsageRequest.SummarizeDatabaseInsightResourceUsageRequest;
import * as SummarizeDatabaseInsightResourceUsageTrendRequest from "./summarize-database-insight-resource-usage-trend-request";
export import SummarizeDatabaseInsightResourceUsageTrendRequest = SummarizeDatabaseInsightResourceUsageTrendRequest.SummarizeDatabaseInsightResourceUsageTrendRequest;
import * as SummarizeDatabaseInsightResourceUtilizationInsightRequest from "./summarize-database-insight-resource-utilization-insight-request";
export import SummarizeDatabaseInsightResourceUtilizationInsightRequest = SummarizeDatabaseInsightResourceUtilizationInsightRequest.SummarizeDatabaseInsightResourceUtilizationInsightRequest;
import * as SummarizeDatabaseInsightTablespaceUsageTrendRequest from "./summarize-database-insight-tablespace-usage-trend-request";
export import SummarizeDatabaseInsightTablespaceUsageTrendRequest = SummarizeDatabaseInsightTablespaceUsageTrendRequest.SummarizeDatabaseInsightTablespaceUsageTrendRequest;
import * as SummarizeExadataInsightResourceCapacityTrendRequest from "./summarize-exadata-insight-resource-capacity-trend-request";
export import SummarizeExadataInsightResourceCapacityTrendRequest = SummarizeExadataInsightResourceCapacityTrendRequest.SummarizeExadataInsightResourceCapacityTrendRequest;
import * as SummarizeExadataInsightResourceCapacityTrendAggregatedRequest from "./summarize-exadata-insight-resource-capacity-trend-aggregated-request";
export import SummarizeExadataInsightResourceCapacityTrendAggregatedRequest = SummarizeExadataInsightResourceCapacityTrendAggregatedRequest.SummarizeExadataInsightResourceCapacityTrendAggregatedRequest;
import * as SummarizeExadataInsightResourceForecastTrendRequest from "./summarize-exadata-insight-resource-forecast-trend-request";
export import SummarizeExadataInsightResourceForecastTrendRequest = SummarizeExadataInsightResourceForecastTrendRequest.SummarizeExadataInsightResourceForecastTrendRequest;
import * as SummarizeExadataInsightResourceForecastTrendAggregatedRequest from "./summarize-exadata-insight-resource-forecast-trend-aggregated-request";
export import SummarizeExadataInsightResourceForecastTrendAggregatedRequest = SummarizeExadataInsightResourceForecastTrendAggregatedRequest.SummarizeExadataInsightResourceForecastTrendAggregatedRequest;
import * as SummarizeExadataInsightResourceStatisticsRequest from "./summarize-exadata-insight-resource-statistics-request";
export import SummarizeExadataInsightResourceStatisticsRequest = SummarizeExadataInsightResourceStatisticsRequest.SummarizeExadataInsightResourceStatisticsRequest;
import * as SummarizeExadataInsightResourceUsageRequest from "./summarize-exadata-insight-resource-usage-request";
export import SummarizeExadataInsightResourceUsageRequest = SummarizeExadataInsightResourceUsageRequest.SummarizeExadataInsightResourceUsageRequest;
import * as SummarizeExadataInsightResourceUsageAggregatedRequest from "./summarize-exadata-insight-resource-usage-aggregated-request";
export import SummarizeExadataInsightResourceUsageAggregatedRequest = SummarizeExadataInsightResourceUsageAggregatedRequest.SummarizeExadataInsightResourceUsageAggregatedRequest;
import * as SummarizeExadataInsightResourceUtilizationInsightRequest from "./summarize-exadata-insight-resource-utilization-insight-request";
export import SummarizeExadataInsightResourceUtilizationInsightRequest = SummarizeExadataInsightResourceUtilizationInsightRequest.SummarizeExadataInsightResourceUtilizationInsightRequest;
import * as SummarizeExadataMembersRequest from "./summarize-exadata-members-request";
export import SummarizeExadataMembersRequest = SummarizeExadataMembersRequest.SummarizeExadataMembersRequest;
import * as SummarizeHostInsightResourceCapacityTrendRequest from "./summarize-host-insight-resource-capacity-trend-request";
export import SummarizeHostInsightResourceCapacityTrendRequest = SummarizeHostInsightResourceCapacityTrendRequest.SummarizeHostInsightResourceCapacityTrendRequest;
import * as SummarizeHostInsightResourceForecastTrendRequest from "./summarize-host-insight-resource-forecast-trend-request";
export import SummarizeHostInsightResourceForecastTrendRequest = SummarizeHostInsightResourceForecastTrendRequest.SummarizeHostInsightResourceForecastTrendRequest;
import * as SummarizeHostInsightResourceStatisticsRequest from "./summarize-host-insight-resource-statistics-request";
export import SummarizeHostInsightResourceStatisticsRequest = SummarizeHostInsightResourceStatisticsRequest.SummarizeHostInsightResourceStatisticsRequest;
import * as SummarizeHostInsightResourceUsageRequest from "./summarize-host-insight-resource-usage-request";
export import SummarizeHostInsightResourceUsageRequest = SummarizeHostInsightResourceUsageRequest.SummarizeHostInsightResourceUsageRequest;
import * as SummarizeHostInsightResourceUsageTrendRequest from "./summarize-host-insight-resource-usage-trend-request";
export import SummarizeHostInsightResourceUsageTrendRequest = SummarizeHostInsightResourceUsageTrendRequest.SummarizeHostInsightResourceUsageTrendRequest;
import * as SummarizeHostInsightResourceUtilizationInsightRequest from "./summarize-host-insight-resource-utilization-insight-request";
export import SummarizeHostInsightResourceUtilizationInsightRequest = SummarizeHostInsightResourceUtilizationInsightRequest.SummarizeHostInsightResourceUtilizationInsightRequest;
import * as SummarizeOperationsInsightsWarehouseResourceUsageRequest from "./summarize-operations-insights-warehouse-resource-usage-request";
export import SummarizeOperationsInsightsWarehouseResourceUsageRequest = SummarizeOperationsInsightsWarehouseResourceUsageRequest.SummarizeOperationsInsightsWarehouseResourceUsageRequest;
import * as SummarizeSqlInsightsRequest from "./summarize-sql-insights-request";
export import SummarizeSqlInsightsRequest = SummarizeSqlInsightsRequest.SummarizeSqlInsightsRequest;
import * as SummarizeSqlPlanInsightsRequest from "./summarize-sql-plan-insights-request";
export import SummarizeSqlPlanInsightsRequest = SummarizeSqlPlanInsightsRequest.SummarizeSqlPlanInsightsRequest;
import * as SummarizeSqlResponseTimeDistributionsRequest from "./summarize-sql-response-time-distributions-request";
export import SummarizeSqlResponseTimeDistributionsRequest = SummarizeSqlResponseTimeDistributionsRequest.SummarizeSqlResponseTimeDistributionsRequest;
import * as SummarizeSqlStatisticsRequest from "./summarize-sql-statistics-request";
export import SummarizeSqlStatisticsRequest = SummarizeSqlStatisticsRequest.SummarizeSqlStatisticsRequest;
import * as SummarizeSqlStatisticsTimeSeriesRequest from "./summarize-sql-statistics-time-series-request";
export import SummarizeSqlStatisticsTimeSeriesRequest = SummarizeSqlStatisticsTimeSeriesRequest.SummarizeSqlStatisticsTimeSeriesRequest;
import * as SummarizeSqlStatisticsTimeSeriesByPlanRequest from "./summarize-sql-statistics-time-series-by-plan-request";
export import SummarizeSqlStatisticsTimeSeriesByPlanRequest = SummarizeSqlStatisticsTimeSeriesByPlanRequest.SummarizeSqlStatisticsTimeSeriesByPlanRequest;
import * as UpdateAwrHubRequest from "./update-awr-hub-request";
export import UpdateAwrHubRequest = UpdateAwrHubRequest.UpdateAwrHubRequest;
import * as UpdateDatabaseInsightRequest from "./update-database-insight-request";
export import UpdateDatabaseInsightRequest = UpdateDatabaseInsightRequest.UpdateDatabaseInsightRequest;
import * as UpdateEnterpriseManagerBridgeRequest from "./update-enterprise-manager-bridge-request";
export import UpdateEnterpriseManagerBridgeRequest = UpdateEnterpriseManagerBridgeRequest.UpdateEnterpriseManagerBridgeRequest;
import * as UpdateExadataInsightRequest from "./update-exadata-insight-request";
export import UpdateExadataInsightRequest = UpdateExadataInsightRequest.UpdateExadataInsightRequest;
import * as UpdateHostInsightRequest from "./update-host-insight-request";
export import UpdateHostInsightRequest = UpdateHostInsightRequest.UpdateHostInsightRequest;
import * as UpdateOperationsInsightsWarehouseRequest from "./update-operations-insights-warehouse-request";
export import UpdateOperationsInsightsWarehouseRequest = UpdateOperationsInsightsWarehouseRequest.UpdateOperationsInsightsWarehouseRequest;
import * as UpdateOperationsInsightsWarehouseUserRequest from "./update-operations-insights-warehouse-user-request";
export import UpdateOperationsInsightsWarehouseUserRequest = UpdateOperationsInsightsWarehouseUserRequest.UpdateOperationsInsightsWarehouseUserRequest;
