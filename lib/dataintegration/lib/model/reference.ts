/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * Reference contains application configuration information.
 */
export interface Reference {
  /**
   * The reference's key, key of the object that is being used by a published object or its dependents.
   */
  "key"?: string;
  /**
   * The name of reference object.
   */
  "name"?: string;
  /**
   * The identifier of reference object.
   */
  "identifier"?: string;
  /**
   * The identifier path of reference object.
   */
  "identifierPath"?: string;
  /**
   * The description of reference object.
   */
  "description"?: string;
  /**
   * The type of reference object.
   */
  "type"?: Reference.Type;
  /**
   * The new reference object to use instead of the original reference. For example, this can be a data asset reference.
   */
  "targetObject"?: any;
  /**
   * The application key of the reference object.
   */
  "applicationKey"?: string;
  /**
   * List of published objects where this is used.
   */
  "usedBy"?: Array<model.ReferenceUsedBy>;
  /**
   * List of references that are dependent on this reference.
   */
  "childReferences"?: Array<model.ChildReference>;
}

export namespace Reference {
  export enum Type {
    OracleDataAsset = "ORACLE_DATA_ASSET",
    OracleObjectStorageDataAsset = "ORACLE_OBJECT_STORAGE_DATA_ASSET",
    OracleAtpDataAsset = "ORACLE_ATP_DATA_ASSET",
    OracleAdwcDataAsset = "ORACLE_ADWC_DATA_ASSET",
    MysqlDataAsset = "MYSQL_DATA_ASSET",
    GenericJdbcDataAsset = "GENERIC_JDBC_DATA_ASSET",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: Reference): object {
    const jsonObj = {
      ...obj,
      ...{
        "usedBy": obj.usedBy
          ? obj.usedBy.map(item => {
              return model.ReferenceUsedBy.getJsonObj(item);
            })
          : undefined,
        "childReferences": obj.childReferences
          ? obj.childReferences.map(item => {
              return model.ChildReference.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Reference): object {
    const jsonObj = {
      ...obj,
      ...{
        "usedBy": obj.usedBy
          ? obj.usedBy.map(item => {
              return model.ReferenceUsedBy.getDeserializedJsonObj(item);
            })
          : undefined,
        "childReferences": obj.childReferences
          ? obj.childReferences.map(item => {
              return model.ChildReference.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
