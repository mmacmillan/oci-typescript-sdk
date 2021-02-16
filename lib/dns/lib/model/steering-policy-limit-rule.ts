/**
 * DNS API
 * API for the DNS service. Use this API to manage DNS zones, records, and other DNS resources.
For more information, see [Overview of the DNS Service](/iaas/Content/DNS/Concepts/dnszonemanagement.htm).

 * OpenAPI spec version: 20180115
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

export interface SteeringPolicyLimitRule extends model.SteeringPolicyRule {
  /**
   * An array of `caseConditions`. A rule may optionally include a sequence of cases defining alternate
   * configurations for how it should behave during processing for any given DNS query. When a rule has
   * no sequence of `cases`, it is always evaluated with the same configuration during processing. When
   * a rule has an empty sequence of `cases`, it is always ignored during processing. When a rule has a
   * non-empty sequence of `cases`, its behavior during processing is configured by the first matching
   * `case` in the sequence. When a rule has no matching cases the rule is ignored. A rule case with no
   * `caseCondition` always matches. A rule case with a `caseCondition` matches only when that expression
   * evaluates to true for the given query.
   *
   */
  "cases"?: Array<model.SteeringPolicyLimitRuleCase>;
  /**
   * Defines a default count if `cases` is not defined for the rule or a matching case does
   * not define `count`. `defaultCount` is **not** applied if `cases` is defined and there
   * are no matching cases. In this scenario, the next rule will be processed. If no rules
   * remain to be processed, the answer will be chosen from the remaining list of answers.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "defaultCount"?: number;

  "ruleType": string;
}

export namespace SteeringPolicyLimitRule {
  export function getJsonObj(obj: SteeringPolicyLimitRule, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.SteeringPolicyRule.getJsonObj(obj) as SteeringPolicyLimitRule)),
      ...{
        "cases": obj.cases
          ? obj.cases.map(item => {
              return model.SteeringPolicyLimitRuleCase.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export const ruleType = "LIMIT";
}
