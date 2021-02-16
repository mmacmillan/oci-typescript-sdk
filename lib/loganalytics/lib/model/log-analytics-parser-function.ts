/**
 * LogAnalytics API
 * The LogAnalytics API for the LogAnalytics service.

 * OpenAPI spec version: 20200601
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * LogAnalyticsParserFunction
 */
export interface LogAnalyticsParserFunction {
  "parserMetaPlugin"?: model.LogAnalyticsParserMetaPlugin;
  /**
   * plugin instance Id Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserFunctionId"?: number;
  /**
   * plugin instance internal name
   */
  "parserFunctionName"?: string;
  /**
   * is enabled flag
   */
  "isEnabled"?: boolean;
  /**
   * is system flag
   */
  "isSystem"?: boolean;
  /**
   * parser Id Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserId"?: number;
  /**
   * parser internal name
   */
  "parserName"?: string;
  /**
   * plugin type internal name
   */
  "parserMetaPluginName"?: string;
  /**
   * priority Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "parserFunctionPriority"?: number;
  /**
   * parameter map list
   */
  "parserFunctionParameters"?: Array<model.LogAnalyticsParserFunctionParameter>;
}

export namespace LogAnalyticsParserFunction {
  export function getJsonObj(obj: LogAnalyticsParserFunction): object {
    const jsonObj = {
      ...obj,
      ...{
        "parserMetaPlugin": obj.parserMetaPlugin
          ? model.LogAnalyticsParserMetaPlugin.getJsonObj(obj.parserMetaPlugin)
          : undefined,

        "parserFunctionParameters": obj.parserFunctionParameters
          ? obj.parserFunctionParameters.map(item => {
              return model.LogAnalyticsParserFunctionParameter.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
